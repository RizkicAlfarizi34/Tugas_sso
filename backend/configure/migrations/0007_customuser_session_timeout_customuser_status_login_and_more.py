# Generated by Django 5.0.6 on 2024-05-30 04:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('configure', '0006_customuser_groups_customuser_user_permissions_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='customuser',
            name='session_timeout',
            field=models.IntegerField(default=30),
        ),
        migrations.AddField(
            model_name='customuser',
            name='status_login',
            field=models.BooleanField(default=False),
        ),
        migrations.AlterField(
            model_name='customuser',
            name='last_login',
            field=models.DateTimeField(blank=True, null=True),
        ),
    ]
