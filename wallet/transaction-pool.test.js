const TransactionPool = require('./transaction-pool');
const Transaction = require('./transaction');
const Wallet = require('./index');

describe('TransactionPool', () => {
  let tp, wallet, transaction;

  beforeEach(() => {
    tp = new TransactionPool();
    wallet = new Wallet();
    transaction = Transaction.newTransaction(wallet, 'th1sssss1', 20);
    tp.updateOrAddTransaction(transaction);
  });

  it('adds transactions to the pool', () => {
    expect(tp.transactions.find(t => t.id === transaction.id)).toEqual(transaction);
  });

  it('updates a transaction in the pool', () => {
    const oldTransaction = JSON.stringify(transaction);
    const newTransaction = transaction.update(wallet, 'fh2ihih-4342', 50);
    tp.updateOrAddTransaction(newTransaction);
    expect(JSON.stringify(tp.transactions.find(t => t.id === transaction.id)))
      .not.toEqual(oldTransaction);
  })
});
