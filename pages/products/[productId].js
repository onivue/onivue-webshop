import ProductCard from '@/components/Product/ProductCard'

const recursiveCatalog = async () => {
    return await fetch('https://fakestoreapi.com/products')
        .then((res) => res.json())
        .then((json) => {
            return json
        })
}
const getProduct = async (id) => {
    return await fetch(`https://fakestoreapi.com/products/${id}`)
        .then((res) => res.json())
        .then((json) => {
            return json
        })
}

export default function ProductPage({ item }) {
    return (
        <div className="min-h-screen  pt-2">
            <ProductCard key={item.id} product={item} />
        </div>
    )
}

export async function getStaticPaths() {
    const products = await recursiveCatalog()

    const paths = products.map((item) => {
        const productId = String(item.id)
        return {
            params: { productId },
        }
    })

    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps({ params }) {
    const item = await getProduct(params.productId)

    return {
        props: {
            item,
        },
    }
}
