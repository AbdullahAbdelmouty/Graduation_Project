# Generated by Django 4.0.10 on 2024-02-11 21:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('malero', '0032_customers_availableuploads'),
    ]

    operations = [
        migrations.AlterField(
            model_name='packages',
            name='packageName',
            field=models.CharField(blank=True, max_length=30, primary_key=True, serialize=False),
        ),
    ]