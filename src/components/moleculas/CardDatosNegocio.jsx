import styled from "styled-components";
export function CardDatosNegocio({titulo,valor}) {
    return (<Container>
        <div class="card">
            <div class="pricing-blok-content">
                <p class="pricing-plan">{titulo}</p>
                <div class="price-value">
                <p class="price-number">{valor}</p>
                </div>
            </div>
        </div>
    </Container>);
}
const Container =styled.div`
.card{
    width: 190px;
    background: #fff;
    padding: 1rem;
    border-radius: 1rem;
    border: 0.5vmin solid #000;
    box-shadow: 0.4rem 0.4rem #000;
    overflow: hidden; 
    color: black;
    .pricing-blok-content{
        display: flex;
        height: 100%;
        flex-direction: column;
        gap: 0.5rem;
        .pricing-plan{
            color: #000;
            font-size: 1.3rem;
            line-height: 1.25;
            font-weight: 700;
        }
        .price-value{
            display: flex;
            color: #000;
            font-size: 1.8rem;
            line-height: 1.25;
            font-weight: 700;
            justify-content:center;
        }
    }
}
`;
