# sequence monad, i.e. functional for loop
def success(val): return val, None
def error(why): return None, why

def get_banks(name):
    if name == "Irek": return success(["Bank of America", "Chase"])
    elif name == "John": return success(["PNC Bank", "Wells Fargo"])
    elif name == "Alex": return success(["TD Bank"])
    else: return error("No bank associated with name '%s'" % name)

def get_accounts(bank, name):
    if   name == "Irek" and bank == "Bank of America": return success([1, 2])
    elif name == "Irek" and bank == "Chase": return success([3])
    elif name == "John" and bank == "PNC Bank": return success([4])
    elif name == "John" and bank == "Wells Fargo": return success([5, 6])
    elif name == "Alex" and bank == "TD Bank": return success([7, 8])
    else: return error("No account associated with (%s, %s)" % (bank, name))

def get_balance(bank, account):
    return 250000

def qualified_amount(balance):
    if balance > 200000: return success(balance)
    else: return error("Insufficient funds for loan, current balance is %s" % balance)

# iterate through multiple banks and each account in the bank given name, via for-loop in list comprehension
def get_val(m_val): return m_val[0]
def get_error(m_val): return m_val[1]

def get_loan(name):

    m_banks = get_banks(name)
    if get_error(m_banks):
        return m_banks
    banks = get_val(m_banks)

    for bank in banks:
        m_accounts = get_accounts(bank, name)
        if get_error(m_accounts):
            return m_accounts
        accounts = get_val(m_accounts)

        for account in accounts:
            return qualified_amount(get_balance(bank, account))

names = ["Irek", "John", "Alex", "Fred"]
loans = map(get_loan, names)
for name, loan in zip(names, loans):
    print "%s: %s" % (name, loan)
