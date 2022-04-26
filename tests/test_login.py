from multiprocessing.connection import wait
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.keys import Keys
import time
from selenium.webdriver.common.by import By
import unittest
import pytest

class TestSample():
    @pytest.fixture()
    def test_setup(self):
        global driver
        ser = Service("C:/Program Files (x86)/chromedriver.exe")
        op = webdriver.ChromeOptions()
        driver = webdriver.Chrome(service=ser, options=op)
        driver.maximize_window()
        driver.implicitly_wait(10)
        yield
        driver.close()
        driver.quit()




    def test_Register(self, test_setup):
        driver.get("http://127.0.0.1:3000")

        register_Button = driver.find_element(by=By.LINK_TEXT, value="Register")
        register_Button.click()

        driver.find_element(by=By.NAME, value="name").send_keys("Krishna1_Abc")
        driver.find_element(by=By.NAME, value="email").send_keys("krishna12@gmail.com")
        driver.find_element(by=By.NAME, value="password").send_keys("Sri@12345")
        driver.find_element(by=By.NAME, value="password2").send_keys("Sri@12345")
        
        register_link = driver.find_element(by=By.ID, value="register_button")
        register_link.click()
        
        bodyText = driver.find_element(by=By.ID, value="success_msg").text
        assert bodyText == "You have now registered!" 
          

    
    def test_user_login(self, test_setup):
        driver.get("http://127.0.0.1:3000")
        login_button = driver.find_element(by=By.LINK_TEXT, value="Log In")
        login_button.click()

        driver.find_element(by=By.NAME, value="email").send_keys("krishna12@gmail.com")
        driver.find_element(by=By.NAME, value="password").send_keys("Sri@12345")

        login_link = driver.find_element(by=By.ID, value="Login_Button")
        login_link.click()

        bodyText = driver.find_element(by=By.ID, value="dashboard").text
        assert bodyText == "My Dashboard" 


    def test_user_search_basic(self, test_setup):
        driver.get("http://127.0.0.1:3000")
        login_button = driver.find_element(by=By.LINK_TEXT, value="Log In")
        login_button.click()

        driver.find_element(by=By.NAME, value="email").send_keys("krishna12@gmail.com")
        driver.find_element(by=By.NAME, value="password").send_keys("Sri@12345")

        login_link = driver.find_element(by=By.ID, value="Login_Button")
        login_link.click()

        #Apple Facebook Nintendo
        searchTerm = "nintendo"
        driver.find_element(by=By.ID, value="search_bar").send_keys(searchTerm)

        search_link = driver.find_element(by=By.ID, value="search_button")
        search_link.click()

        #articlesText = driver.find_element(by=By.CLASS_NAME, value="news").text
        
        articlesText = driver.page_source

        count = articlesText.count(searchTerm)

        assert count > 10 

    def test_user_search_AND(self, test_setup):
        driver.get("http://127.0.0.1:3000")
        login_button = driver.find_element(by=By.LINK_TEXT, value="Log In")
        login_button.click()

        driver.find_element(by=By.NAME, value="email").send_keys("krishna12@gmail.com")
        driver.find_element(by=By.NAME, value="password").send_keys("Sri@12345")

        login_link = driver.find_element(by=By.ID, value="Login_Button")
        login_link.click()

        #Porsche AND Audi 
        searchTerm1 = "Porsche"
        searchTerm2 = "Audi"
        searchTerm = searchTerm1 + " AND " + searchTerm2
        driver.find_element(by=By.ID, value="search_bar").send_keys(searchTerm)

        search_link = driver.find_element(by=By.ID, value="search_button")
        search_link.click()

        #articlesText = driver.find_element(by=By.CLASS_NAME, value="news").text
        
        articlesText = driver.page_source

        count1 = articlesText.count(searchTerm1)
        count2 = articlesText.count(searchTerm2)

        assert (count1 > 10) & (count2 > 10) 

    
    def test_user_search_OR(self, test_setup):
        driver.get("http://127.0.0.1:3000")
        login_button = driver.find_element(by=By.LINK_TEXT, value="Log In")
        login_button.click()

        driver.find_element(by=By.NAME, value="email").send_keys("krishna12@gmail.com")
        driver.find_element(by=By.NAME, value="password").send_keys("Sri@12345")

        login_link = driver.find_element(by=By.ID, value="Login_Button")
        login_link.click()

        #ethereum OR litecoin 
        searchTerm1 = "Audi"
        searchTerm2 = "Volvo"
        searchTerm = searchTerm1 + " OR " + searchTerm2
        driver.find_element(by=By.ID, value="search_bar").send_keys(searchTerm)

        search_link = driver.find_element(by=By.ID, value="search_button")
        search_link.click()

        #articlesText = driver.find_element(by=By.CLASS_NAME, value="news").text
        
        articlesText = driver.page_source

        count1 = articlesText.count(searchTerm1)
        count2 = articlesText.count(searchTerm2)

        assert count1 > 10 | count2 > 10 

    def test_user_search_Complex(self, test_setup):
        driver.get("http://127.0.0.1:3000")
        login_button = driver.find_element(by=By.LINK_TEXT, value="Log In")
        login_button.click()

        driver.find_element(by=By.NAME, value="email").send_keys("krishna12@gmail.com")
        driver.find_element(by=By.NAME, value="password").send_keys("Sri@12345")

        login_link = driver.find_element(by=By.ID, value="Login_Button")
        login_link.click()

        # Cars AND (Tesla OR Rivian) NOT Volvo
        searchTerm1 = "Tesla"
        searchTerm2 = "Rivian"
        searchTerm3 = "Volvo"
        searchTerm = "Cars" + " AND "  + "(" + searchTerm1 + " OR " + searchTerm2 + ")" + " NOT " + searchTerm3 
        driver.find_element(by=By.ID, value="search_bar").send_keys(searchTerm)

        search_link = driver.find_element(by=By.ID, value="search_button")
        search_link.click()

        #articlesText = driver.find_element(by=By.CLASS_NAME, value="news").text
        
        articlesText = driver.page_source

        count1 = articlesText.count(searchTerm1)
        count2 = articlesText.count(searchTerm2)
        count3 = articlesText.count(searchTerm3)
        countcars = articlesText.count("Cars")
        assert (countcars > 10 & (count1 > 10 | count2 >10 ) & count3 == 0) 