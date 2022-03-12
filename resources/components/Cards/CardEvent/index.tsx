import React from 'react';
import Link from 'next/link'

import * as Styled from './style';

interface Props {
    data: any;
    category: any;
    image: string
}
const CardEvent = ({ data, category, image }: Props) => {
    return (
        <Styled.CardEvent>
            <Styled.CardEventImage src={image} />
            <Link href={'/trip/' + data.uuid}>
                <Styled.CardEventBody>
                    {/* <Styled.CategoryTag> {category.name} </Styled.CategoryTag> */}
                    <Styled.CardEventTitle>Modern home in city center in the heart of historic Los Angeles</Styled.CardEventTitle>
                    <Styled.CardEventInfo>
                        <Styled.CardEventPriceWrapper>
                            <Styled.CardEventPriceText>A partir de</Styled.CardEventPriceText>
                            <Styled.CardEventPrice>{new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL", }).format(Math.floor(Math.random() * (700)))}</Styled.CardEventPrice>
                        </Styled.CardEventPriceWrapper>
                    </Styled.CardEventInfo>
                </Styled.CardEventBody>

            </Link>
            {/* <Styled.CardEventFooter>
                <Styled.OwnerInfo>
                    <Styled.OwnerImage><img src={'https://i.picsum.photos/id/395/500/350.jpg?hmac=dTiIr52Z88T2mgCLRjX9QcSVtwpiK6_jhlOaduyfyAE'} /></Styled.OwnerImage>
                    <Styled.OwnerName>test</Styled.OwnerName>

                </Styled.OwnerInfo>
            </Styled.CardEventFooter> */}
        </Styled.CardEvent>
    );
}
export default CardEvent;