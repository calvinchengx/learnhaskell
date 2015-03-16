# Consider the following API
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



# Alternative solution
def unit(value):
    return value

def bind(val, f):
    if (val):
        return f(val)
    else:
        return None

def get_loan(name):
    m_name = unit(name)
    m_account = bind(m_name, get_account)
    m_balance = bind(m_account, get_balance)
    m_loan = bind(m_balance, qualified_amount)
    return m_loan

names = ["Irek", "John", "Alex", "Nick", "Fake"]
loans = map(get_loan, names)

for name, loan in zip(names, loans):
    print("%s: %s" % (name, loan))
