import sanityClient from '@sanity/client'


export default sanityClient({
  projectId: 'p7ossqve',
  dataset: 'production',
  token: '', // or leave blank to be anonymous user
  useCdn: true // `false` if you want to ensure fresh data
})