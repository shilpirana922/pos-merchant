export function CurrentDate() {
const current = new Date();
return`${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
}