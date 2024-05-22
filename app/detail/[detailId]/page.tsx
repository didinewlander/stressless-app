
const page = ({ params }: { params: { detailId: string } }) => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {params.detailId}
    </main>
  )
}

export default page