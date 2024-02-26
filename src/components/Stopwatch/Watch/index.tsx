import style from './Watch.module.scss'

interface Props {
    	tempo: number | undefined
}
export default function Relogio({tempo = 0}: Props) {
    const minutos = Math.floor(tempo / 60);
    const segundos = tempo % 60;
    const minutosString = String(minutos).padStart(2, '0');
    const segundosString = String(segundos).padStart(2, '0');
    return (
        <>
        <span className={style.relogioNumero}>{minutosString[0]}</span>
        <span className={style.relogioNumero}>{minutosString[1]}</span>
        <span className={style.relogioDivisao}>:</span>
        <span className={style.relogioNumero}>{segundosString[0]}</span>
        <span className={style.relogioNumero}>{segundosString[1]}</span>
        </>
    )
}