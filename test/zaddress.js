var zencashjs = require('..')
var chai = require('chai')
var expect = chai.expect

it('mkZSecretKey() should be deterministic', function () {
  var z_secretKey = zencashjs.zaddress.mkZSecretKey(
    'Z pigs likes to snooze. ZZZZ'
  )
  expect(z_secretKey).to.equal(
    '0c10a61a669bc4a51000c4c74ff58c151912889891089f7bae5e4994a73af7a8'
  )
})

it('zSecretToSpendingKey() should be deterministic', function () {
  var spendingKey = zencashjs.zaddress.zSecretKeyToSpendingKey(
    '0c10a61a669bc4a51000c4c74ff58c151912889891089f7bae5e4994a73af7a8'
  )
  expect(spendingKey).to.equal(
    'SKxtHJsneoLByrwME9Nh4cd4AvYLNK9jJkAnB3AHNW794udD1qpx'
  )
})

it('zSecretToPayingKey() should be deterministic', function () {
  var a_pk = zencashjs.zaddress.zSecretKeyToPayingKey(
    '0c10a61a669bc4a51000c4c74ff58c151912889891089f7bae5e4994a73af7a8'
  )
  expect(a_pk).to.equal(
    '927a3819627247c0dd39102ec5449fc6fc952e242aad08615df9f26718912e27'
  )
})

it('zSecretToTransmissionKey() should be deterministic', function () {
  var pk_enc = zencashjs.zaddress.zSecretKeyToTransmissionKey(
    '0c10a61a669bc4a51000c4c74ff58c151912889891089f7bae5e4994a73af7a8'
  )
  expect(pk_enc).to.equal(
    '22d666c34ababacf6a9a4a752cc7870b505b64e85638aa45d23ac32992397960'
  )
})

it('mkZAddress() should be deterministic', function () {
  var Zaddress = zencashjs.zaddress.mkZAddress(
    '927a3819627247c0dd39102ec5449fc6fc952e242aad08615df9f26718912e27',
    '22d666c34ababacf6a9a4a752cc7870b505b64e85638aa45d23ac32992397960'
  )
  expect(Zaddress).to.equal(
    'zkYH8q26LZSo6N2cBsUtiftsvz9zxk7uc5qH1Z8tjmUK4hgxWa9coBYZN4zfgzWr2Q4DrheXtDuf5dmQartPUq917fgTSJc'
  )
})
