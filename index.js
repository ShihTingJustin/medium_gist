//recordSeeder.js

let category = []
Category.find()
  .lean()
  .then(cates => {
    console.log(cates) // 這邊有看到資料
    return category.concat(cates)
  })
取出 Category 的資料，放進之後的 record 種子資料

db.once('open', () => {
  console.log('mongodb connected!')
  for (let i = 0; i < 10; i++) {
    Record.create({
      category: 這邊要用,
      name: pickName(),
      date: pickDate(),
      amount: Math.floor(Math.random() * 500 + 50)
    })
  }
  console.log('done!')
})