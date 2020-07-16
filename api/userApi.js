import * as Firebase from 'firebase';

const provider = new Firebase.auth.GithubAuthProvider();

export async function CreateUser(email, password, navigation) {
    Firebase.auth().
    createUserWithEmailAndPassword(email, password).then(() => {
        Firebase.auth().onAuthStateChanged(user => {
            navigation.navigate("SignIn")
        })
        alert("Hello there")
    })
}

export async function SignInGitHub(navigation) {
    Firebase.auth().signInWithPopup(provider).then(result => {
    })
    alert("Git Hub")
}

export async function SignOut() {
    Firebase.auth().signOut().then(() => {
       alert("User sign out!!");
    })
}

export async function SignInUser(email, password, navigation) {
    Firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
        navigation.navigate("EmployeeList")
    })
}