export default function convertData(data: String){
    const [dia,mes,ano] = data.split('/')
    const dataFormatada = new Date(+ano,+mes-1,+dia);
    return dataFormatada
}