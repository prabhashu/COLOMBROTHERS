import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { Button } from '../components/ui/Button';
import { CheckCircleIcon, CreditCardIcon, TruckIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
export function CheckoutPage() {
  const {
    cartTotal,
    clearCart
  } = useCart();
  const [step, setStep] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const shippingCost = cartTotal > 100 ? 0 : 15;
  const tax = cartTotal * 0.08;
  const total = cartTotal + shippingCost + tax;
  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
      clearCart();
    }, 2000);
  };
  if (isSuccess) {
    return <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md w-full text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircleIcon className="w-10 h-10 text-green-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Order Confirmed!
          </h2>
          <p className="text-gray-600 mb-8">
            Thank you for your purchase. Your order #12345 has been received and
            will be shipped shortly.
          </p>
          <Link to="/">
            <Button fullWidth>Return to Home</Button>
          </Link>
        </div>
      </div>;
  }
  return <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Checkout
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            {/* Steps Indicator */}
            <div className="flex items-center justify-between mb-8 px-4">
              <div className={`flex flex-col items-center ${step >= 1 ? 'text-red-600' : 'text-gray-400'}`}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 mb-2 ${step >= 1 ? 'border-red-600 bg-red-50' : 'border-gray-300'}`}>
                  <TruckIcon className="w-5 h-5" />
                </div>
                <span className="text-sm font-medium">Shipping</span>
              </div>
              <div className={`flex-1 h-0.5 mx-4 ${step >= 2 ? 'bg-red-600' : 'bg-gray-300'}`}></div>
              <div className={`flex flex-col items-center ${step >= 2 ? 'text-red-600' : 'text-gray-400'}`}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 mb-2 ${step >= 2 ? 'border-red-600 bg-red-50' : 'border-gray-300'}`}>
                  <CreditCardIcon className="w-5 h-5" />
                </div>
                <span className="text-sm font-medium">Payment</span>
              </div>
            </div>

            {/* Forms */}
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-sm border border-gray-100">
              {step === 1 ? <form onSubmit={e => {
              e.preventDefault();
              setStep(2);
            }}>
                  <h2 className="text-xl font-bold text-gray-900 mb-6">
                    Shipping Information
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">
                        First Name
                      </label>
                      <input required type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">
                        Last Name
                      </label>
                      <input required type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none" />
                    </div>
                    <div className="sm:col-span-2 space-y-2">
                      <label className="text-sm font-medium text-gray-700">
                        Address
                      </label>
                      <input required type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">
                        City
                      </label>
                      <input required type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">
                        Postal Code
                      </label>
                      <input required type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none" />
                    </div>
                    <div className="sm:col-span-2 space-y-2">
                      <label className="text-sm font-medium text-gray-700">
                        Phone Number
                      </label>
                      <input required type="tel" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none" />
                    </div>
                  </div>
                  <div className="mt-8 flex justify-end">
                    <Button type="submit">Continue to Payment</Button>
                  </div>
                </form> : <form onSubmit={handlePayment}>
                  <h2 className="text-xl font-bold text-gray-900 mb-6">
                    Payment Details
                  </h2>
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">
                        Card Number
                      </label>
                      <input required type="text" placeholder="0000 0000 0000 0000" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none" />
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">
                          Expiry Date
                        </label>
                        <input required type="text" placeholder="MM/YY" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">
                          CVC
                        </label>
                        <input required type="text" placeholder="123" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">
                        Cardholder Name
                      </label>
                      <input required type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none" />
                    </div>
                  </div>
                  <div className="mt-8 flex justify-between">
                    <Button type="button" variant="ghost" onClick={() => setStep(1)}>
                      Back
                    </Button>
                    <Button type="submit" isLoading={isProcessing}>
                      Pay ${total.toFixed(2)}
                    </Button>
                  </div>
                </form>}
            </div>
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 sticky top-24">
              <h2 className="text-xl font-bold text-gray-900 mb-6">
                Order Summary
              </h2>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span>
                    {shippingCost === 0 ? 'Free' : `$${shippingCost.toFixed(2)}`}
                  </span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Tax (8%)</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="border-t border-gray-100 pt-4 flex justify-between text-lg font-bold text-gray-900">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
}