import React from 'react'

import Helmet from '../components/Helmet'
import Section, { SectionBody, SectionTitle } from '../components/Section'
import Grid from '../components/Grid'
import MenProductCard from '../components/MenProductCard'

import productData from '../assets/fake-data/men-products'
import MenProductView from '../components/MenProductView'

const MenProduct = props => {
    const product = productData.getProductBySlug(props.match.params.slug)

    const relatedProducts = productData.getProducts(8)
    React.useEffect(() => {
        window.scrollTo(0, 0)
    }, [product])
    return (
        <Helmet title={product.title}>
            <Section>
                <SectionBody>
                    <MenProductView product={product} />
                </SectionBody>
            </Section>
            <Section>
                <SectionTitle>
                    Khám phá thêm
                </SectionTitle>
                <SectionBody>
                    <Grid
                        col={4}
                        mdCol={2}
                        smCol={1}
                        gap={20}
                    >
                        {
                            relatedProducts.map((item, index) => (
                                <MenProductCard
                                    key={index}
                                    img01={item.image01}
                                    img02={item.image02}
                                    name={item.title}
                                    price={Number(item.price)}
                                    delPrice={Number(item.delPrice)}
                                    slug={item.slug}
                                />
                            ))
                        }
                    </Grid>
                </SectionBody>
            </Section>
        </Helmet>
    )
}



export default MenProduct
