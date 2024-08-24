  DashBoard Project, It contains of 3 Pages like

      1.Login Page => http://localhost:3000/login
      2.Dashboard Page=> http://localhost:3000/
      3.KPI Page => http://localhost:3000/kpi

Features:
   * First creating the Login Page for the authentication.(username and password contains any but it must contain at least one letter of username and one letter of password).
   * Once you Login Successfully, you not need to login multiple times until log out.(I have been storing login data using JWT Token in the Cookies Storage).
   * After Successful Login, the page redirects to the Dashboard page which contains the Dashboard Analysis and charts using Sample data.
   * Then If you want to move to the KPI Overview you must go to the url(http://localhost:3000/kpi) to View KPI Data Analysis. They also used the sample data.
   * Show Password is option is available to view the password in the login page.
   * All the Images, Icons, Charts are designed based on real world data's. If there any changes in data, the Images,Charts,Icons would be change.

Additional Features,
    * Once you log in , you can't go to the Login Page until Logout.
    * Once you log out (unauthenticated users), you cannot access the Dashboard Page and KPI Page.
    * Logout Button is created in the Dashboard Page and KPI Page.
