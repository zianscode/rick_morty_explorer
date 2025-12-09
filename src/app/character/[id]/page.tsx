import CharacterDetail from './CharacterDetail'

export async function generateStaticParams() {
  return []
}

export const dynamicParams = true

export default function CharacterPage() {
  return <CharacterDetail />
}