# Generated by Django 4.0.10 on 2024-02-09 13:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('malero', '0027_alter_cards_cardnumber'),
    ]

    operations = [
        migrations.AlterField(
            model_name='cards',
            name='cardNumber',
            field=models.BigIntegerField(primary_key=True, serialize=False),
        ),
    ]
