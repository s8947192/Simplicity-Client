import SyncComponent from 'HOC/SyncComponent'

export const Home = SyncComponent('Home', require('pages/Home/Home'))
export const Features = SyncComponent('Features', require('pages/Home/Features/Features'))
export const Pricing = SyncComponent('Pricing', require('pages/Home/Pricing/Pricing'))
export const Contacts = SyncComponent('Contacts', require('pages/Home/Contacts/Contacts'))
export const Login = SyncComponent('Login', require('pages/Home/Login/LoginPage'))
export const Registration = SyncComponent('Registration', require('pages/Home/Registration/RegistrationPage'))

export const Profile = SyncComponent('Profile', require('pages/Profile/Profile'))
