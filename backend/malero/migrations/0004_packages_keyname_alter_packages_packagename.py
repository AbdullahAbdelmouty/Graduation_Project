# Generated by Django 4.0.10 on 2023-12-12 19:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('malero', '0003_customers_maxofuploads_customers_numberofuploads_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='packages',
            name='keyName',
            field=models.CharField(blank=True, max_length=30),
        ),
        migrations.AlterField(
            model_name='packages',
            name='packageName',
            field=models.CharField(max_length=30, primary_key=True, serialize=False),
        ),
    ]
