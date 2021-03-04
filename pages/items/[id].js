import { allItems, itemBySlug } from '../../lib/api'

const Item = ({ item }) => {
  return (
    <>
      <h1>{ item.title }</h1>
    </>
  )
}

export async function getStaticPaths() {
  const items = await allItems()

  const paths = items.map(item => `/items/${item.slug}`)

  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const item = await itemBySlug(params.id)

  return { props: { item } }
}

export default Item
