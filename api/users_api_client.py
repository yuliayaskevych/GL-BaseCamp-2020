import requests
from config.config import Config
from endpoints.endpoints import Endpoints


class UsersApiClient():
    
    @staticmethod
    def _preapare_url(url, base_url=Config.BASE_URL):
        return base_url + url

    @staticmethod
    def list_users():
        return requests.get(
            url=UsersApiClient. _preapare_url(Endpoints.USERS)
        ).json()

    @staticmethod
    def create_user(user_details):
        return requests.post(
            url=UsersApiClient. _preapare_url(Endpoints.USERS),
            json=user_details
        ).json()

    @staticmethod
    def single_user():
        return requests.get(
            url=UsersApiClient. _preapare_url(Endpoints.SINGLE_USER),
        ).json()

    @staticmethod
    def update_user(user_details):
        return requests.put(
            url=UsersApiClient. _preapare_url(Endpoints.UPDATE_USER),
            json=user_details
        ).json()

    @staticmethod
    def delete_user():
        return requests.delete(
            url=UsersApiClient. _preapare_url(Endpoints.DELETE_USER),
        )

    @staticmethod
    def register_user(user_details):
        return requests.post(
            url=UsersApiClient. _preapare_url(Endpoints.REGISTER_USER),
            json=user_details
        ).json()

    @staticmethod
    def login_user(user_details):
        return requests.post(
            url=UsersApiClient. _preapare_url(Endpoints.LOGIN_USER),
            json=user_details
        ).json()
