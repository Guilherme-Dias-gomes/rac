import Image from 'next/image'

export default function Card(){
    return (
        <div>
            <Image src="teste" alt="teste" />
            <h3>Geração de energia</h3>
            <p>Oferecemos soluções em geração de energia elétrica por meio de fontes como solar, diesel e gás.</p>
        </div>
    )
}