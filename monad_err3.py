# Consider the following API
def get_account(name):
    if name == "Irek": return 1, None
    elif name == "John": return 2, None
    elif name == "Alex": return 3, None
    elif name == "Nick": return 1, None
    else: return None, "No account associated with name '%s'" % name

def get_balance(account):
    if account == 1: return 1000000, None
    elif account == 2: return 75000, None
    else: return None, "No balance associated with account as #%s" % account

def qualified_amount(balance):
    if balance > 200000: return balance, None
    else: return None, "Insufficient funds for loan, current balance is %s" % balance

# Alternative solution that also produces an easily understood error message
def unit(value):
    return value, None

def bind(mval, mf):
    value = mval[0]
    error = mval[1]

    if not error:
        return mf(value)
    else:
        return mval

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
