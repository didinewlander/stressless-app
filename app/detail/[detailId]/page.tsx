
const page = ({ params }: { params: { detailId: string } }) => {
  return (
    <main >
      {params.detailId}
    </main>
  )
}

export default page