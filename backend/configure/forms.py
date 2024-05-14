from django import forms
from .models import CustomUser

class LoginForm(forms.ModelForm):
    class Meta:
        model = CustomUser
        fields = ['email', 'nama_perusahaan', 'nomor_telepon', 'status_login', 'last_login', 'session_timeout']
