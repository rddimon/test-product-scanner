import time

from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view
from rest_framework.exceptions import ValidationError
from rest_framework.response import Response


@api_view(['GET'])
def validate(request):
    data = request.GET.copy()
    if data and int(data.get("product", 150)) < 100:
        raise ValidationError
    return Response({"message": "Hello, world!"})


@csrf_exempt
@api_view(['GET'])
def update(request):
    time.sleep(2)
    data = request.GET.copy()
    if data and int(data.get("product", 150)) < 100:
        raise ValidationError
    return Response("OK")
