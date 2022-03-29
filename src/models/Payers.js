const PayerSchema = new mongoose.Schema({
    payer: String,
    points: Number,
    timestamp: String,
})

const Payers = mogoose.model('Payers', PayerSchema)
