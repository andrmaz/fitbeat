import Signin from './_patterns/signin'

export default async function Landing() {
  return (
    <main className='container'>
      <section >
        <Signin provider='nodemailer' />
      </section>
      <footer></footer>
    </main>
  )
}
