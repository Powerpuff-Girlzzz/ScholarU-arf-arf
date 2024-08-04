<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login Page</title>
    <link rel="stylesheet" href="login.css">
    <script type="module" src="https://unpkg.com/ionicons@4.5.10-0/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule="" src="https://unpkg.com/ionicons@4.5.10-0/dist/ionicons/ionicons.js"></script>
</head>

<body>
    <header>
        <h2 class="logo"><a href="/Front-End-LandingPage-main/landingMain/landing.html">ScholarU</a></h2>
        <nav>
            <input type="checkbox" id="sidebar-active">
            <label for="sidebar-active" class="open-sidebar-btn">
                <svg xmlns="http://www.w3.org/2000/svg" height="32" viewBox="0 -960 960 960" width="32" fill="#e8eaed">
                    <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
                </svg>
            </label>
            <label for="sidebar-active" id="overlay"></label>
            <div class="links-container">
                <label for="sidebar-active" class="close-sidebar-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" height="32" viewBox="0 -960 960 960" width="32"
                        fill="#e8eaed">
                        <path
                            d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                    </svg>
                </label>
                <a href="/Front-End-LandingPage-main/landingMain/landing.html" class="home-link">About</a>
                <a href="/Front-End-LandingPage-main/landingMain/landing.html">Contact Us</a>
                <a href="/Front-End-LandingPage-main/login/login.html">Login</a>
            </div>
        </nav>
    </header>
    <div class="wrapper">
        <span class="icon-close">
            <ion-icon name="close-circle-outline"></ion-icon>
        </span>
        <div class="form-box login">
            <h2>Login</h2>
            <form method="post" action="login.php">
                <div class="input-box" placeholder="email">
                    <input type="email" required>
                    <label>Email</label>
                </div>
                <div class="input-box">
                    <input type="password" required placeholder="password">
                    <label>Password</label>
                </div>
                <div class="remember-forgot">
                    <label><input type="checkbox"> Remember me</label>
                    <a href="#">Forgot Password?</a>
                </div>
                <button type="submit" class="btn" name='Login_button>Login</button>

                <div class="login-register">
                    <p>Don't have an account? <a href="/Front-End-LandingPage-main/registration form/registration.html"
                            class="register-link">Register</a></p>
                </div>
            </form>
        </div>
    </div>
    <footer id="footer">
        Copyright © 2024 ScholarU.
    </footer>
    <script src="script.js"></script>
</body>

</html>
<?php
$conn = mysqli_connect("localhost", "root", "");
if(isset($_POST['Login_button'])){
    $email=$_POST['email'];
    $password=$_POST['password'];
    $sql= "SELECT * FROM websitelogin.logindetails WHERE email = '$email'";
    $result = mysqli_query($conn,$sql);
    while($row = mysqli_fetch_assoc($result)){
        $resultPassword = $row['password'];
        if($password == $resultPassword){
            header('Location:index.html');
        }else{
            echo "<script>
            alert('Login unsuccessful');
            </script>";
        }
    }
}
?>