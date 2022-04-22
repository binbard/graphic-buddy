export default function Logout() {
    var arr = [];
    for (var i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i).substring(0, 5) == 'realm') {
            arr.push(localStorage.key(i));
        }
    }
    for (var i = 0; i < arr.length; i++) {
        localStorage.removeItem(arr[i]);
    }
    window.location.reload();
}