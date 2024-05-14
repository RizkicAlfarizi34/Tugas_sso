from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework import status
from django.contrib.auth.models import User
from rest_framework.permissions import AllowAny
from django.urls import path

class LoginAPIView(APIView):
    permission_classes = [AllowAny]  # Izin ini memungkinkan akses tanpa autentikasi.

    def post(self, request):
        # Dapatkan data masuk dari permintaan
        username = request.data.get('username')
        password = request.data.get('password')

        # Verifikasi kredensial pengguna
        user = User.objects.filter(username=username).first()
        if user is None or not user.check_password(password):
            return Response({"detail": "Username atau password salah"}, status=status.HTTP_401_UNAUTHORIZED)

        # Berhasil autentikasi, buat token JWT
        refresh = RefreshToken.for_user(user)
        return Response({
            'refresh': str(refresh),
            'access': str(refresh.access_token),
        })


urlpatterns = [
    path('api/token/', LoginAPIView.as_view(), name='token_obtain_pair'),
]
