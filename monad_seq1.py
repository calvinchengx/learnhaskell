# sequence monad, i.e. functional for loop

def get_banks(name):
    if name == "Irek": return ["Bank of America", "Chase"]
    elif name == "John": return ["PNC Bank", "Wells Fargo"]
    elif name == "Alex": return ["TD Bank"]
    else: return []

def get_accounts(bank, name):
    if   name == "Irek" and bank == "Bank of America": return [1, 2]
    elif name == "Irek" and bank == "Chase": return [3]
    elif name == "John" and bank == "PNC Bank": return [4]
    elif name == "John" and bank == "Wells Fargo": return [5, 6]
    elif name == "Alex" and bank == "TD Bank": return [7, 8]
    else: return []

def get_balance(bank, account):
    return 250000

def qualified_amount(balance):
    if balance > 200000: return balance
    else: return 0

# iterate through multiple banks and each account in the bank given name, via for-loop in list comprehension
def get_loan(name):
    return [ qualified_amount(get_balance(bank, account))
        for bank in get_banks(name)
        for account in get_accounts(bank, name) ]

names = ["Irek", "John", "Alex", "Fred"]
loans = map(get_loan, names)
for name, loan in zip(names, loans):
    print "%s: %s" % (name, loan)
