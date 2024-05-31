from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework import status
from django.contrib.auth.models import User
from rest_framework.permissions import AllowAny
from django.shortcuts import render, redirect
from .forms import SignUpForm

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

def home_view(request):
    return render(request, 'home.html')

def sign_up_view(request):
    if request.method == 'POST':
        form = SignUpForm(request.POST)
        if form.is_valid():
            user = User.objects.create_user(
                username=form.cleaned_data['username'],
                email=form.cleaned_data['email'],
                password=form.cleaned_data['password']
            )
            return redirect('redirecting')
    else:
        form = SignUpForm()
    return render(request, 'sign_up.html', {'form': form})

def redirecting_view(request):
    return render(request, 'redirecting.html')

def welcome_view(request):
    return render(request, 'welcome.html')
