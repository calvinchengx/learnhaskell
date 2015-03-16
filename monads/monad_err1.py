# source: http://www.dustingetz.com/2012/04/07/dustins-awesome-monad-tutorial-for-humans-in-python.html

# Consider the following API, defined by 3 functions get_account, get_balance and qualified_amount
def get_account(name):
    if name == "Irek": return 1
    elif name == "John": return 2
    elif name == "Alex": return 3
    elif name == "Nick": return 1
    else: return None

def get_balance(account):
    if account == 1: return 1000000
    elif account == 2: return 75000
    else: return None

def qualified_amount(balance):
    if balance > 200000: return balance
    else: return None




# Here's how we use it
def get_loan(name):
    account = get_account(name)
    if not account:
        return None
    balance = get_balance(account)
    if not balance:
        return None
    loan = qualified_amount(balance)
    if not loan:
        return None
    return loan

names = ["Irek", "John", "Alex", "Nick", "Fake"]
loans = map(get_loan, names)

for name, loan in zip(names, loans):
    print("%s: %s" % (name, loan))

