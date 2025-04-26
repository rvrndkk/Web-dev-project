from rest_framework.permissions import BasePermission, SAFE_METHODS

class IsOwnerOrReadOnly(BasePermission):
    def has_object_permission(self, request, view, obj):
        # Разрешить чтение всем
        if request.method in SAFE_METHODS:
            return True
        # Разрешить изменение/удаление только владельцу
        return obj.owner == request.user
