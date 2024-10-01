window.onload = function () {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    
    if (isLoggedIn === 'true') {
        document.getElementById('protectedSection').style.display = 'none';
    }
};
