def get_upi_link(amount, transaction_id):
    vpa = "etoffee@okaxis" # Your Business VPA
    name = "Etoffee AI Studio"
    # This creates a link that opens GPay/PhonePe/Paytm instantly
    return f"upi://pay?pa={vpa}&pn={name}&am={amount}&tr={transaction_id}&cu=INR"
