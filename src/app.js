import style from './styles/index.css';
import logo from './logo.svg';


const user = {
    name: 'Anbarasan',
    age: 25
};
const user2 = {
    ...user,
    address: "Pondicherry"
}
console.log(user);
console.log(user2);