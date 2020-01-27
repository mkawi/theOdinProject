#write your code here
def add(a,b)
    a+b
  end
  
  def subtract(a,b)
    a-b
  end
  
  def sum(a)
    return 0 if a == []
    a.inject(:+)
  end
  
  def multiply(a)
    return 0 if a == []
    a.inject(:*)
  end
  
  def power(a,b)
    a**b
  end
  
  def factorial(a)
    return 0 if a == 0
    factorial = 1
    (1..a).each do |i|
      factorial *= i
    end
    factorial
  end