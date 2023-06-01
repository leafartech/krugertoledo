import Main from '@/components/Main'
import styles from './OfficeScreen.module.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Section from '@/components/Section'
import Title from '@/components/Title'
import Subtitle from '@/components/Subtitle'
import Card from '@/components/Card'

export default function OfficeScreen() {
    return (
        <>
            <Header image="2"/>
            <Main>
                <Section>
                    {/* Números */}
                    <Title top="Nosso Escritório">Escritório de advocacia Krüger Toledo</Title>
                    <div className={ 'flex' } style={{ marginTop: '24px'}}>
                        <Card number={true} small="anos" name="+10" text="Ao longo de todos esses anos, a responsabilidade aliada à capacitação fizeram parte do sucesso de nosso escritório."/>
                        <Card number={true} small="clientes" name="+350" text="Não é apenas um número! São mais de 350 pessoas que confiaram em nosso trabalho e foram acompanhadas em todo processo por uma equipe de excelência."/>
                        <Card number={true} small="milhões" name="+13" text="Devemos esta alta quantia gerenciada à confiança depositada em nosso escritório quanto à resolução de questões jurídicas com maestria."/>
                    </div>
                </Section>
                <Section top={true}>
                    <Title bot={true} top="Sobre">Confira um pouco da nossa história</Title>
                    <div className={ styles.text }>
                        <Subtitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent gravida sit amet arcu eu auctor. Proin efficitur tristique elementum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent gravida sit amet arcu eu auctor. Proin efficitur tristique elementum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent gravida sit amet arcu eu auctor. Proin efficitur tristique elementum.</Subtitle>
                    </div>
                </Section>
                <Section>
                    {/* <Title>Contamos em nosso time de advogados, especialistas das seguintes áreas:</Title> */}
                    {/* Equipe --> equipe formada por: */}
                </Section>
            </Main>
            <Footer />
        </>
    )
}