# Generated by Django 4.0.10 on 2023-12-11 12:11

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('malero', '0002_cards_coupons_uploads'),
    ]

    operations = [
        migrations.AddField(
            model_name='customers',
            name='maxOfuploads',
            field=models.IntegerField(blank=True, default=3),
        ),
        migrations.AddField(
            model_name='customers',
            name='numberOfuploads',
            field=models.IntegerField(blank=True, default=0),
        ),
        migrations.CreateModel(
            name='Orders',
            fields=[
                ('orderNumber', models.AutoField(primary_key=True, serialize=False)),
                ('fullName', models.CharField(blank=True, max_length=60)),
                ('email', models.CharField(blank=True, max_length=100)),
                ('phoneNumber', models.IntegerField(blank=True)),
                ('country', models.CharField(blank=True, max_length=60)),
                ('period', models.IntegerField(blank=True)),
                ('cost', models.IntegerField(blank=True)),
                ('nameOnCard', models.CharField(blank=True, max_length=50)),
                ('expiryDateCard', models.IntegerField(blank=True)),
                ('cvv', models.IntegerField(blank=True)),
                ('expiryDateOrder', models.DateTimeField(blank=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('card', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='malero.cards')),
                ('coupon', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='malero.coupons')),
                ('package', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='malero.packages')),
                ('user', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='malero.customers')),
            ],
        ),
        migrations.AddField(
            model_name='uploads',
            name='orderNumber',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='malero.orders'),
        ),
    ]
