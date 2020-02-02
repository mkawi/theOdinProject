#write your code here
def echo word
    word
  end
  
  def shout word
    word.upcase
  end
  
  def repeat word, times=2
    word = "#{word} " * times
    word.chop
  end
  
  def start_of_word word, number_of_letters
    word[0...number_of_letters]
  end
  
  def first_word phrase
    phrase = phrase.partition(" ")
    phrase[0]
  end
  
  def titleize phrase
    ng_words = ['and', 'over', 'the']
    words = phrase.split()
    words[0].capitalize!
    words.map { |x|
      if !ng_words.include?(x.to_s)
        x.to_s.capitalize
      else
        x.to_s.downcase
      end
    }.join(" ")
  end