const { Business, sequelize } = require('./models')
const { Op } = require('sequelize')

const stringify = (data) => {
  console.log(JSON.stringify(data, null, 2))
}

const findAllBusiness = async () => {
  const result = await Business.findAll()
  stringify(result)
}

const findBusinessById = async (id) => {
  const result = await Business.findByPk(id)
  stringify(result)
}

const findBusinessByRating = async () => {
  const result = await Business.findAll({
    where: { rating: 5 }
  })
  stringify(result)
}

const createBusiness = async () => {
  const result = await Business.create({
    name: 'Rando Business 2',
    address: '1234 Main St.',
    rating: 5
  })
  stringify(result)
}

const updateBusiness = async () => {
  const result = await Business.update(
    {
      name: 'BETTER BUSINESS NAME'
    },
    { where: { name: 'RANDOM BUSINESS' } }
  )
  stringify(result)
}

const deleteBusiness = async () => {
  const result = await Business.destroy({
    where: { name: 'BETTER BUSINESS NAME' }
  })
  stringify(result)
}

async function main() {
  try {
    await findAllBusiness()
    // await findBusinessById(4)
    // await findBusinessByRating()
    // await createBusiness()
    // await updateBusiness()
    // await deleteBusiness()
  } catch (error) {
    console.log(error)
  } finally {
    await sequelize.close()
  }
}

main()
