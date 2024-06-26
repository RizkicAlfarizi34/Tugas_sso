# Generated by Django 5.0.4 on 2024-05-06 09:51

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='CustomUser',
            fields=[
                ('password', models.CharField(max_length=128, verbose_name='password')),
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('email', models.EmailField(max_length=254, unique=True)),
                ('nama_perusahaan', models.CharField(max_length=255)),
                ('nomor_telepon', models.CharField(max_length=15)),
                ('status_login', models.BooleanField(default=False)),
                ('last_login', models.DateTimeField(blank=True, null=True)),
                ('session_timeout', models.PositiveSmallIntegerField(default=30)),
            ],
            options={
                'abstract': False,
            },
        ),
    ]
