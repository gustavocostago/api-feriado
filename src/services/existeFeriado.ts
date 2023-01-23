//verifica atraves do endpoint api/feriadoGetOne se ha duplicidade
export default async function existeFeriado(data:String) {
    const verifica = await fetch('http://localhost:3000/api/feriadoGetOne?date='+data.split('/').reverse().join('-'))
    return verifica.status
}