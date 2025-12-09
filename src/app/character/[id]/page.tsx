import CharacterDetail from './CharacterDetail'

export async function generateStaticParams() {
  return []
}

export default function CharacterPage() {
  return <CharacterDetail />
}