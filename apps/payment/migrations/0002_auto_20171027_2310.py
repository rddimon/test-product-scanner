# -*- coding: utf-8 -*-
# Generated by Django 1.11.6 on 2017-10-27 20:10
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('payment', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='crawlspermonth',
            name='price',
        ),
        migrations.AddField(
            model_name='crawlspermonth',
            name='count',
            field=models.IntegerField(default=0, verbose_name='Count'),
        ),
        migrations.AlterField(
            model_name='numberofproducts',
            name='name',
            field=models.CharField(default='', max_length=200, verbose_name='Name'),
        ),
    ]
