import pytest
import requests
from config.config import Config
from api.users_api_client import UsersApiClient


def test_it_checks_user_list():
    users = UsersApiClient.list_users()
    assert users['per_page'] == len(users['data'])


def test_it_checks_user_created():
    user_details = {"name": "Billy",
                    "job": "GameDeveloper"
                    }
    user = UsersApiClient.create_user(user_details)
    assert user.get('id') is not None
    assert user_details['name'] == user['name']
    assert user_details['job'] == user['job']


def test_it_checks_single_user():
    user = UsersApiClient.single_user()
    assert isinstance(user['data'], dict) == True


def test_it_checks_update_user():
    user_details = {"name": "Billy",
                    "job": "Front-end Developer"
                    }
    user = UsersApiClient.update_user(user_details)
    assert user_details['name'] == user['name']
    assert user_details['job'] == user['job']


def test_it_checks_delete_user():
    response = UsersApiClient.delete_user()
    assert response.status_code == 204


def test_it_checks_register_user():
    user_details = {
        "email": "eve.holt@reqres.in",
        "password": "pistol"
    }
    user = UsersApiClient.register_user(user_details)
    assert user.get('id') is not None
    assert user.get('token') is not None


def test_it_not_checks_register_user():
    user_details = {
        "email": "eve.holt@reqres.in",
    }
    user = UsersApiClient.register_user(user_details)
    assert user.get('error') is not None


def test_it_checks_login_user():
    user_details = {
        "email": "eve.holt@reqres.in",
        "password": "cityslicka"
    }
    user = UsersApiClient.login_user(user_details)
    assert user.get('token') is not None


def test_it_not_checks_login_user():
    user_details = {
        "email": "peter@klaven",
    }
    user = UsersApiClient.login_user(user_details)
    assert user.get('error') is not None
