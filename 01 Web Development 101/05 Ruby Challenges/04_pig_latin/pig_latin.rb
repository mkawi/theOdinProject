#write your code here
def translate(str)
    vowels = "aeiou".split('')
    words = str.split(' ')
    (0..words.length-1).each do |i|
      if vowels.include?(words[i][0])
        words[i] = words[i] + 'ay'
      else
        while !vowels.include?(words[i][0])
          if words[i][0] == 'q' and words[i][1] == 'u'
            a = words[i].split('')
            a.shift
            a.shift
            a << 'qu'
            words[i] = a.join('')
          else
            a = words[i].split('')
            b = a.shift
            a << b
            words[i] = a.join('')
          end
        end
        words[i] = words[i] + 'ay'
      end
    end
    words.join(' ')
  end